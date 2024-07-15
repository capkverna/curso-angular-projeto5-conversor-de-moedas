import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Conversao, ConversaoResponse } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  // Nova url do fixer.io, que adiciona o parâmetro access_key, que é a chave de autenticação 
  //private readonly BASE_URL = "http://api.fixer.io/latest";
  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3";

  constructor(private http: HttpClient) { }

  /**
   * Realiza a chamada para a API de conversão de moedas
   * 
   * @param conversao Conversao
   * @returns Observable<ConversaoResponse>
   */
  converter(conversao: Conversao): Observable<any> {
    let params = `&base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;

    return this.http
      .get(this.BASE_URL + params);
  }

  /**
   * Retorna a cotação para dado uma response.
   * 
   * @param conversaoResponse ConversaoResponse
   * @param conversao Conversao
   * @returns number
   */
  cotacaoPara(conversaoResponse: ConversaoResponse, conversao: Conversao): number {
    if (conversaoResponse === undefined) {
      return 0;
    }

    return conversaoResponse.rates[conversao.moedaPara];
  }

  /**
   * Retorna a cotação de dado uma response.
   * 
   * @param conversaoResponse ConversaoResponse
   * @param conversao Conversao
   * @returns string
   */
  cotacaoDe(conversaoResponse: ConversaoResponse, conversao: Conversao): string {
    if (conversaoResponse === undefined) {
      return '0';
    }

    return (1 / conversaoResponse.rates[conversao.moedaPara]).toFixed(4);
  }

  /**
   * Retorna a data da cotação dado uma response.
   * 
   * @param conversaoResponse conversaoResponse
   * @returns string
   */
  dataCotacao(conversaoResponse: ConversaoResponse): string {
    if (conversaoResponse === undefined) {
      return '';
    }

    return conversaoResponse.date;
  }

}
