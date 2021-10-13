import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BACKTEST_URL } from 'src/app/app.constants';

export class BtResult {
  constructor(
    public id: number,
    public description: string,
    public testedDate: Date,
    public completed: boolean
  ){

  }
}

export class BtInput {
  constructor(
    public description: string,
    public scripName: string,
    public slippage: number,
    public entryTime: string,
    public exitTime: string,
    public exitOnNextDay: boolean,
    public btInputLegs : BtInputLeg[] = []
  ){
  }
}

export class BtInputLeg {
  constructor(
    public callOrPut: string,
    public howFarFromStrike: number,
    public buyOrSell: string,
    public curOrNextExpiry: string,
  ){
  }
}

export class BtResultDetail {
  constructor(
    public id: number,
    public description: string,
    public fromDate: Date,
    public toDate: Date,
    public profit_loss: number = 0.00,
    public intraDay: boolean,
    public backTestInput : BtInput
  ){

  }
}




@Injectable({
  providedIn: 'root'
})
export class BackTestService {

  constructor(
    private http:HttpClient
  ) { }

  getAllBackTests(username: any){
    return this.http.get<BtResult[]>(`${BACKTEST_URL}/users/${username}/btresults`);
  }

  getBackTestDetail(username: any, id: any){
    return this.http.get<BtResultDetail>(`${BACKTEST_URL}/users/${username}/btresults/${id}`);
  }

  deleteBackTest(username: any, id: any){
    return this.http.delete(`${BACKTEST_URL}/users/${username}/btresults/${id}`);
  }

  createABackTest(username: any,backTestInput : BtInput){
    return this.http.post(`${BACKTEST_URL}/users/${username}/btresult`,backTestInput);
  }

}
