class Person {
  protected name: string;
  private age: number;
  public email: string;
  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  //methods
  public introduce(): string {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old. You can reach me at ${this.email}`;
  }
  //getter
  public getAge(): number {
    return this.age;
  }
  //setter
  public setAge(age: number): void {
    this.age = age;
  }
}

class Employee {
  constructor(
    private id: string,
    public name: string,
    protected department: string,
  ) {}

  getDetails(): string {
    return `Employee ID: ${this.id}, Name: ${this.name}, Department: ${this.department}`;
  }
}
let praveen = new Employee("1", "praveen", "IT");
console.log(praveen.getDetails());
