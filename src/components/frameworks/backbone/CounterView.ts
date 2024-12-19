import { BaseBackboneView } from '@/lib/backbone-integration/backbone/base-view';
import { sharedState } from '@/lib/backbone-integration/state/store';
import { counterTemplate } from './counter-template';

export class CounterView extends BaseBackboneView {
  private cleanup: (() => void) | null = null;

  initialize() {
    this.render();
    const currentValue = sharedState.getState<number>('counter') ?? 0;
    this.updateDisplay(currentValue);
    
    this.cleanup = sharedState.subscribe<number>('counter', (value) => {
      this.updateDisplay(value);
    });
  }

  events() {
    return {
      'click .backbone-button': 'handleIncrement'
    };
  }

  handleIncrement() {
    const currentValue = sharedState.getState<number>('counter') ?? 0;
    sharedState.setState('counter', currentValue + 1);
  }

  updateDisplay(value: number = 0) {
    this.$('.counter-value').text(`Count: ${value}`);
  }

  render() {
    this.$el.html(counterTemplate);
    return this;
  }

  remove() {
    if (this.cleanup) {
      this.cleanup();
      this.cleanup = null;
    }
    return super.remove();
  }
}