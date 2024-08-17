class Wallet
{
    constructor()
    {
        this._balance = 0;
    }

    deposit(amount)
    {
        this._balance += amount;
        this._transactions = [];
    }

    withdraw(amount)
    {
        if (amount > this._balance)
            {
                throw new Error('Insufficient funds');
            }
        this._balance -= amount;
    }

    get Balance()
    {
        return this._balance;
    }

    get transactions()
    {
        return this._transactions;
    }

    _processDeposit(amount)
    {
        this._balance += amount;
        this._transactions.push({type: 'withdraw', amount});
    }

    processWithdraw(amount)
    {
        if (amount > this._balance)
            {
                throw new Error('Insufficient funds');
            }
        this._balance -= amount;
        this._transactions.push({type: 'withdraw', amount});
    }
}

const wallet = new Wallet();
wallet.deposit(100);