export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad:
      'Conceptualización del concepto de moral, ética y sus raíces filosóficas',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La ética',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Historia de la ética',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Aproximaciones éticas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Aplicaciones de la ética',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'La moral',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Diferencias entre moral y ética',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'El origen y evolución de la moral',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Los valores morales: definición e importancia',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'El decálogo del abogado',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Platón. (2004). La República. El Cid Editor.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/35993',
    },
    {
      referencia: 'Aristóteles. (2004). Ética a Nicómaco. El Cid Editor.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/93982',
    },
    {
      referencia:
        'Cohen Agrest, D. (2015). Spinoza: una cartografía de la Ética. Eudeba.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/119926',
    },
    {
      referencia:
        'Vásquez Rocca, A. (2006). Rorty: pragmatismo, ironismo liberal y solidaridad. Red Polis.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/118112',
    },
    {
      referencia:
        'Vazquez, E. & Gómez Ortiz, M.del P. (2019). La moral y su evolución. TEPEXI Boletín Científico de la Escuela Superior Tepeji del Río, 6(12), 1-8.',
      link:
        'https://repository.uaeh.edu.mx/revistas/index.php/tepexi/article/view/4085',
    },
    {
      referencia:
        'Couture, E. J. (2002) Los mandamientos del abogado. Universidad Nacional Autónoma de México.',
      link:
        'https://biblio.juridicas.unam.mx/bjv/detalle-libro/4190/los-mandamientos-del-abogado-coleccion-facultad-de-derecho',
    },
  ],
  glosario: [
    {
      termino: 'Alteridad',
      significado:
        'Concepto filosófico que se refiere al reconocimiento del otro como distinto a uno mismo, promoviendo el respeto y la empatía, en las relaciones humanas.',
    },
    {
      termino: 'Decálogo del Abogado',
      significado:
        'Conjunto de principios éticos formulados por Eduardo Couture, que establecen las normas de conducta profesional y moral que deben guiar a los abogados, en su ejercicio profesional.',
    },
    {
      termino: 'Ética',
      significado:
        'Disciplina filosófica que estudia los principios y valores que rigen la conducta humana, distinguiendo entre lo correcto e incorrecto.',
    },
    {
      termino: 'Ética aplicada',
      significado:
        'Rama de la ética que se enfoca en analizar y resolver dilemas morales concretos en distintos ámbitos, como la bioética, la ética profesional o la ética empresarial.',
    },
    {
      termino: 'Ética de la virtud',
      significado:
        'Corriente ética desarrollada por Aristóteles que enfatiza la formación del carácter y el cultivo de virtudes como la justicia, la templanza y la prudencia para alcanzar una vida moralmente buena.',
    },
    {
      termino: 'Ética deontológica',
      significado:
        'Teoría ética formulada principalmente por Immanuel Kant, que sostiene que la moralidad de una acción se determina por el deber y no por sus consecuencias.',
    },
    {
      termino: 'Ética universal',
      significado:
        'Principios éticos que se consideran válidos para todas las personas, independientemente de su cultura, religión o sociedad, como los derechos humanos y la justicia.',
    },
    {
      termino: 'Moral',
      significado:
        'Conjunto de normas, principios y valores que una sociedad o individuo considera correctos y adecuados para guiar su conducta.',
    },
    {
      termino: 'Utilitarismo',
      significado:
        'Corriente ética desarrollada por Jeremy Bentham y John Stuart Mill, que sostiene que una acción es moralmente correcta si maximiza la felicidad o el bienestar para el mayor número de personas.',
    },
    {
      termino: 'Valores',
      significado:
        'Principios o cualidades que guían el comportamiento humano y que se consideran deseables, como la honestidad, la responsabilidad y la solidaridad.',
    },
  ],
}
