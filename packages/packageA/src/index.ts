import { ClassB } from "packageB";

class ClassA {
  fump() {
    return new ClassB();
  }
}

export { ClassA };
