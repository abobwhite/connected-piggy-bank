import {AccountBalance} from "./AccountBalance";

// TODO: Temp
const sleep = (seconds: number): Promise<void> => {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  })
};

export class AccountApi {
  public static async getAccountBalance(): Promise<AccountBalance> {
    await sleep(2); // TODO: Temp to simulate real loading
    return {
      value: 27.50,
      lastUpdated: new Date(2023, 5, 10, 8, 30, 0)
    };
  }
}
