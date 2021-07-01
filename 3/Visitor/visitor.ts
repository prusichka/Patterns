class Ukraine {
  instance(): void {
    console.log(
      "Наливай, куме, горілки стаканчик, бігає по полю весело кабанчик!"
    );
  }
  callInstance(call): void {
    call.toVoiceInstanceUkr(this);
  }
}
class English {
  instance2(): void {
    console.log(
      "\nPour, godfather, a glass of vodka, running across the field cheerful boar!"
    );
  }
  callInstance(call): void {
    call.toVoiceInstanceEng(this);
  }
}
class Poland {
  instance3(): void {
    console.log(
      "\nNalej, ojcze chrzestny, szklankę wódki, biegniesz przez pole, zabawny dziku!"
    );
  }
  callInstance(call): void {
    call.toVoiceInstancePol(this);
  }
}

const allInst: {} = {
  toVoiceInstanceUkr(Ukraine) {
    Ukraine.instance();
  },
  toVoiceInstanceEng(English) {
    English.instance2();
  },
  toVoiceInstancePol(Poland) {
    Poland.instance3();
  },
};
const moreInstance: {} = {
  toVoiceInstanceUkr() {
    console.log(`Українською мовою !`);
  },
  toVoiceInstanceEng() {
    console.log(`Англійською мовою !`);
  },
  toVoiceInstancePol() {
    console.log(`Польскою мовою !`);
  },
};

const ukr = new Ukraine();
const eng = new English();
const pol = new Poland();

ukr.callInstance(allInst);
ukr.callInstance(moreInstance);
//---------------------------
eng.callInstance(allInst);
eng.callInstance(moreInstance);
//---------------------------
pol.callInstance(allInst);
pol.callInstance(moreInstance);
//---------------------------
