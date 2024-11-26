export function enumerar(valor: boolean) {
    return (
        target: any, 
        propertyKey : string, 
        propertyDescriptor: PropertyDescriptor) => {
            propertyDescriptor.enumerable = valor;
        }
}