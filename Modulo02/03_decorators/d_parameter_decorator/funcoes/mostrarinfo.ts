export function mostrarInfo() {

    return (
        target: any, 
        propertyKey: string, 
        parameterIndex: number) => { 
            console.log('target:', target);
            console.log('property key:', propertyKey);
            console.log('parameter index:', parameterIndex);
        }
}