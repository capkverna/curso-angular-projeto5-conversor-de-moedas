import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ConversorService, MoedaService } from '../services';
import { Conversao, ConversaoResponse, Moeda } from '../models';
import { NumeroDirective } from '../directives';
import { ModalCotacaoComponent } from '../utils';

@Component({
  selector: 'app-conversor',
  standalone: true,
  imports: [ ReactiveFormsModule, FormsModule, 
    CommonModule, NumeroDirective,
    ModalCotacaoComponent
  ],
  templateUrl: './conversor.component.html',
  styleUrl: './conversor.component.css',
  providers: [ MoedaService, ConversorService ]
})
export class ConversorComponent implements OnInit {

  moedas: Moeda[];
  conversao: Conversao;
  possuiErro: boolean;
  conversaoResponse: ConversaoResponse;

  @ViewChild("conversaoForm", { static: true }) conversaoForm: NgForm;

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService
  ) {}

  ngOnInit(): void {
    this.moedas = this.moedaService.listarTodas();
    this.init();
  }

  /**
   * Efetua a chamada para a conversão dos valores.
   */
  init(): void {
    this.conversao = new Conversao('EUR', 'BRL', null);
    this.possuiErro = false;
  }

  /**
   * Efetua a chamada para a conversão dos valores.
   */
  converter(): void {
    if (this.conversaoForm.form.valid) {
      this.possuiErro = false;
      this.conversorService
        .converter(this.conversao)
        .subscribe({
          next: (response) => {
            this.conversaoResponse = response;
            if (!response.success) {
              this.possuiErro = true;
            }
          },
          error: (error) => {
            this.possuiErro = true;
          }
        });
    }
  }

}
