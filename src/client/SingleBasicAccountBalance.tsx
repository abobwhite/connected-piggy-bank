import React, {useEffect, useState} from "react";
import {AccountApi} from "./data/account/AccountApi";
import {AccountBalance} from "./data/account/AccountBalance";

export const SingleBasicAccountBalance = () => {
  const [accountBalance, setAccountBalance] = useState<AccountBalance>();

  useEffect(() => {
    AccountApi.getAccountBalance().then(setAccountBalance);
  }, []);

  // TODO: Format value

  return accountBalance ? (
     <>
       ${accountBalance.value}<br/>
       Last updated: {accountBalance.lastUpdated.toLocaleString()}
     </>
  ) : <>Loading...</>;
};
