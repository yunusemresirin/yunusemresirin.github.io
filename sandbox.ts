// Hier ist ein Beispielcode, der Union Types in TypeScript verwendet:
type Role = 'admin' | 'user' | 'guest';

function checkAccess(role: Role) {
  switch (role) {
    case 'admin':
      console.log('You have admin access');
      break;
    case 'user':
      console.log('You have user access');
      break;
    case 'guest':
      console.log('You have guest access');
      break;
    default:
      console.log('Access denied');
  }
}

checkAccess('admin');
// Output: You have admin access

checkAccess('user');
// Output: You have user access

checkAccess('guest');
// Output: You have guest access

checkAccess('unknown');
// Output: Access denied

/*
    In diesem Beispiel wird ein Union Type namens Role erstellt, 
    das die möglichen Rollen repräsentiert, die ein Benutzer haben kann 
    ('admin', 'user' oder 'guest'). Die checkAccess-Funktion verwendet 
    dann diesen Union Type als Argumenttyp, um zu überprüfen, welche 
    Zugriffsrechte ein Benutzer hat.
*/

// -----------------------------------------------------------------------------------

// Hier ist ein Beispielcode, der den Utility Type Partial<> in TypeScript verwendet:
interface User {
    name: string;
    age: number;
    address: string;
  }
  
  function updateUser(user: Partial<User>) {
    return {...user};
  }
  
  const user = {
    name: 'John Doe',
    age: 30,
    address: '123 Main St'
  };
  
  const updatedUser = updateUser({age: 31});
  
  console.log(updatedUser);
  // Output: {age: 31}
  
/*   
    In diesem Beispiel wird die updateUser-Funktion mit 
    einem Partial<User>-Typ als Argument deklariert, was bedeutet, 
    dass nicht alle Felder des User-Interfaces bereitgestellt 
    werden müssen, wenn die Funktion aufgerufen wird. Die Funktion 
    selbst gibt dann ein neues Objekt zurück, das die Daten enthält, 
    die bereitgestellt wurden. 
*/

// -------------------------------------------------------------------

// Hier ist ein Beispielcode, der den Utility Type ReturnType<> in TypeScript verwendet:
interface User {
    name: string;
    age: number;
    address: string;
  }
  
  function createUser(): User {
    return {
      name: 'John Doe',
      age: 30,
      address: '123 Main St'
    };
  }
  
  type userDataType = ReturnType<typeof createUser>;
  
  const userData: userDataType = createUser();
  
  console.log(userData);
  // Output: {name: 'John Doe', age: 30, address: '123 Main St'}

  /*
    In diesem Beispiel wird der Utility Type ReturnType<> verwendet, um den 
    Rückgabetyp der createUser-Funktion zu ermitteln. ReturnType<typeof 
    createUser> gibt uns den Typ User, den die Funktion zurückgibt. Wir 
    können dann diesen Typ in einer Variablen namens userDataType speichern 
    und ihn für die Typprüfung verwenden, wenn wir die Funktion createUser aufrufen.
  */

// -----------------------------------------------------------------------
