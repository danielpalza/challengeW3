
export class Validation{
    static validateName(name: string) {
        if (name.length < 3) {
          throw new Error('El nombre debe tener al menos 3 caracteres');
        }
      }
      
} 
