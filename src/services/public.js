export function  delay(timeout) {
    return new Promise(resolve => {
        setTimeout(()=>{
            return resolve(1)
        }, timeout);
    });
}
