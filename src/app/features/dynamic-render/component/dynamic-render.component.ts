import { AfterViewInit, ChangeDetectorRef, Component, ComponentRef, Input, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { dynamicRenderModel } from '../model/dynamic-render.model';
import { DataHandlerDirective } from '../../../directives/dataHandler/dataHandlerDirective.directive';

@Component({
  selector: 'app-dynamic-render',
  templateUrl: './dynamic-render.component.html',
  styleUrls: ['./dynamic-render.component.scss']
})
export class DynamicRenderComponent extends DataHandlerDirective implements AfterViewInit, OnDestroy {
  @Input() renderComponentConfig?: dynamicRenderModel;
  @Input() contentEvent$!: Subject<any>;
  @ViewChild('renderSpace', { read: ViewContainerRef }) container!: ViewContainerRef;

  private componentRef!: ComponentRef<any>;

  constructor(private changeDetectorRef : ChangeDetectorRef) {
    super();
  }

  ngAfterViewInit(): void {
    if (!this.renderComponentConfig || !this.renderComponentConfig.component) {
      throw new Error("sectionConfig and sectionConfig.component are required");
    }
    this.loadComponent();
    this.changeDetectorRef.detectChanges();
  }

  override ngOnDestroy(): void {
    this.componentRef?.destroy();
  }

  private loadComponent(): void {
    this.container.clear();
    const componentFactory = this.container.createComponent(this.renderComponentConfig?.component);
    this.componentRef = componentFactory;
    if (this.renderComponentConfig?.inputs) {
      this.mapInputsToComponent(this.renderComponentConfig?.inputs);
      // Manually trigger change detection for the dynamically created component
      this.changeDetectorRef.detectChanges();
    }
    if (this.renderComponentConfig?.outputKeys) {
      this.mapOutputsFromComponent(this.renderComponentConfig?.outputKeys);
    }
  }
  
  private mapInputsToComponent(inputs: any): void {
    Object.entries(inputs).forEach(([key, value]) => {
      // Debug log to ensure inputs are as expected
      console.log(`Setting input ${key} to`, value);
      this.componentRef.instance[key] = value;
    });
  }

  private mapOutputsFromComponent(outputKeys: string[]): void {
    outputKeys.forEach(key => {
      const emitter = this.componentRef.instance[key];
      if (emitter) {
        const subscription = emitter.subscribe((event: any) => {
          this.contentEvent$.next({
            contentId: this.renderComponentConfig?.id || '',
            originEvent: event
          });
        });
        this.subscriptions.push(subscription);
      }
    });
  }
}