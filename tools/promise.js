/**
 * 申明状态常量
 */
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
/**
 * 判断参数是否为func
 */
const isFunc = fn => typeof fn === 'function';

class myPromise{
    constructor(fn){
        if (typeof fn !== 'function'){
            throw '参数应该是func';
        }
        this.fulfilledList = [];
        this.rejectedList = [];
        try {
            fn(this._resolve.bind(this),this._reject.bind(this));
        } catch (err) {
            this._reject(err);
        }
    }
    then(fulfilled, rejected){
        this.fulfilled.push(fulfilled);
        this.rejected.push(rejected);
        return this;
    }
    catch(rejected){
        this.then(undefined, rejected);
    }
    _resolve(value){
        if (!this.fulfilled || !isFunc(this.fulfilled)){
            return function(value){}
        } else {
            return this.fulfilled(value)
        }
    }
    _reject(value){
        if (!this.rejected || !isFunc(this.rejected)){
            return function(value){}
        } else {
            return this.rejected(value)
        }
    }
}
module.exports = myPromise;