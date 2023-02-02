class DocumentContext {
  constructor() {
    this.content = '';
    this.state = new BlankSpace();
  }

  write(text) {
    this.state.write(this, text);
  }

  setState(state) {
    this.state = state;
  }
}

class BlankSpace {
  write(documentContext, text) {
    documentContext.content = text;
    documentContext.setState(new WithContentState());
  }
}

class WithContentState {
  write(documentContext, text) {
    documentContext.content += ` ${text}`;
  }
}

class ToUpperCaseState {
  write(documentContext, text) {
    documentContext.content += ` ${text.toUpperCase()}`;
    documentContext.setState(new ToUpperCaseState());
  }
}

class ToLoweserCaseState {
  write(documentContext, text) {
    documentContext.content += ` ${text.toLowerCase()}`;
    documentContext.setState(new ToLoweserCaseState());
  }
}

class NormalState {
  write(documentContext, text) {
    documentContext.content += ` ${text}`;
    documentContext.setState(new WithContentState());
  }
}

export const statesMap = {
  upperCaseState: ToUpperCaseState,
  lowerCaseState: ToLoweserCaseState,
  normalState: NormalState,
};

export const documentContext = new DocumentContext();
