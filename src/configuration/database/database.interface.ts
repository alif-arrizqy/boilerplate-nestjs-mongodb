export interface IDbConfigDevelopmentAttributes {
  host: string;
  user: string;
  port: number;
  database: string;
}

export interface IDbConfigAttributes {
  host: string;
  user: string;
  password: string;
  cluster: string;
  database: string;
}

export interface IDatabaseConfig {
  development: IDbConfigDevelopmentAttributes;
  staging: IDbConfigAttributes;
  production: IDbConfigAttributes;
}
