import { Directive, HostListener, ElementRef, forwardRef  } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[numero]',
  standalone: true,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NumeroDirective),
    multi: true
  }]
})
export class NumeroDirective implements ControlValueAccessor {

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private el: ElementRef) { }

  /**
   * Implementa evento de keyup para o elemento da diretiva.
   * 
   * @param $event any
   */
  @HostListener('keyup', ['$event'])
  onKeyUp($event: any) {
    let valor = $event.target.value;
    let posDecimais = valor.indexOf('.');


    let auxDecimais = '';
    if (posDecimais > 0) {
      auxDecimais = valor.substr(0, posDecimais);
    }

    valor = valor.replace(/[\D]/g, '');
    auxDecimais = auxDecimais.replace(/[\D]/g, '');

    if (posDecimais > 0) {
      valor = valor.substr(0, auxDecimais.length) + '.' + valor.substr(auxDecimais.length);
    }

    $event.target.value = valor;
    this.onChange(valor);
  }

  /**
   * Registra a função a ser chamada para atualizar
   * valor na model.
   * 
   * @param fn any
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Registra a função a ser chamada para atualizar 
   * valor na model para evento touched.
   * 
   * @param fn any
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Obtém o valor contido na model.
   * 
   * @param value any
   */
  writeValue(value: any): void {
    this.el.nativeElement.value = value;
  }

  /**
   * Altera a propriedade disabled
   * 
   * @param isDisabled boolean
   */
  setDisabledState?(isDisabled: boolean): void {
    this.el.nativeElement.isDisabled = isDisabled;
  }

  @HostListener('blur')
  onBlur() {
    this.onTouched();
  }

}
