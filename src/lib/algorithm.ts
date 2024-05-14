export const algorithm = (data:any) => {
    console.log(data);
    let systemConstant = 1;
    if(data["system"]=="농막") {systemConstant=0;}
    else if(data["system"]=="주택") {systemConstant=1;}
    let result = {
        delivery:[200,280],
        permit:[systemConstant*800, systemConstant*1200],
    }
    return result;
}