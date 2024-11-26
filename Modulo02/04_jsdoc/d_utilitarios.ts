interface Usuario {
    username: string;
    status: number;
  }

// Partial: torna todas as propriedades opcionais
type PartialUser = Partial<Usuario>;

// ReadOnly: torna todas as propriedades configuradas como read-only
type ReadOnlyUser = Readonly<Usuario>;

// Criamos um novo tipo contendo como chaves os valores provenientes de uma união
type UserRole = 'admin' | 'user';
type Roles = Record<UserRole, boolean>;

// criando um novo tipo, desconsiderando o status
type UsuarioSemStatus = Pick<Usuario, 'username'>

// criando um novo tipo omitindo explicitamente uma propriedade
type UsuarioSemUsername = Omit<Usuario, 'username'>;