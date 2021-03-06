const toHHMMSS = function(sec_num:number):string {
    let hours:string = Math.floor(sec_num / 3600).toString();
    let minutes:string = Math.floor((sec_num - (Number(hours) * 3600)) / 60).toString();
    let seconds:string = (sec_num - (Number(hours) * 3600) - (Number(minutes) * 60)).toString();

    if (Number(hours) < 10) { hours = "0" + hours; }
    if (Number(minutes) < 10) { minutes = "0" + minutes; }
    if (Number(seconds) < 10) { seconds = "0" + seconds; }
    return hours + ':' + minutes + ':' + seconds;
}

export {toHHMMSS};