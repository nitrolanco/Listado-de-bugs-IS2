interface RowData {
  id: number;
  name: string;
  long_description: string;
  state: string;
  person_in_charge: string;
}

enum EstadoBug {
  Abierto,
  Cerrado,
  EnProceso,
}

class Bug {
  titulo: string;
  cuerpo: string;
  encargado: string;
  estado: EstadoBug;

  constructor(
    titulo: string = "",
    cuerpo: string = "",
    encargado: string = "",
    estado: EstadoBug = EstadoBug.Abierto
  ) {
    this.titulo = titulo;
    this.cuerpo = cuerpo;
    this.encargado = encargado;
    this.estado = estado;
  }
}

const getEstadoBugFromString = (estado: string): EstadoBug => {
  switch (estado.toLowerCase()) {
    case "abierto":
      return EstadoBug.Abierto;
    case "cerrado":
      return EstadoBug.Cerrado;
    case "en proceso":
      return EstadoBug.EnProceso;
    default:
      return EstadoBug.Abierto;
  }
};

const readBugsFromFile = async (file: File): Promise<Bug[]> => {
  const contents = await file.text();
  const jsonData: RowData[] = JSON.parse(contents);
  const bugs: Bug[] = jsonData.map((row) => {
    const { name, long_description, person_in_charge, state } = row;
    const estado = getEstadoBugFromString(state);
    return new Bug(name, long_description, person_in_charge, estado);
  });

  return bugs;
};

const getBugs = async (): Promise<Bug[]> => {
  const response = await fetch("/bugs.json");
  const jsonData: RowData[] = await response.json();
  const bugs: Bug[] = jsonData.map((row) => {
    const { name, long_description, person_in_charge, state } = row;
    const estado = getEstadoBugFromString(state);
    return new Bug(name, long_description, person_in_charge, estado);
  });

  return bugs;
};

const handleFileSelect = async (event: Event) => {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];

  if (!file) {
    console.error("No file selected");
    return;
  }

  const bugs = await readBugsFromFile(file);
  console.log(bugs);
};

const fileInput = document.createElement("input");
fileInput.type = "file";
fileInput.addEventListener("change", handleFileSelect);
document.body.appendChild(fileInput);

getBugs().then((bugs) => {
  console.log(bugs);
});

export default getBugs;
