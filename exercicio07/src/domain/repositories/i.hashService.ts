export interface CompareParams {
    plain: string; //o que vai ser comparado
    hash: string; // hash do persistido usuario 
}

export interface IHashService {
    compare(params: CompareParams): Promise<boolean>;
    convert(password: string): Promise<string>;
}