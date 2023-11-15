
export class Validation{
    static validateName(name: string) {
        if (name.length < 3) {
          return false
        }
        return true
      }
      
} 
