function log2(prefix: string) : Function {
    return (target: any) => {
        console.log(`${prefix} - ${target}`);
    }
} 

export {log2}


