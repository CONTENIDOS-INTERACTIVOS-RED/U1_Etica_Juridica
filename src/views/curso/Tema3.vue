<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. El decálogo del abogado'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5
        .col-lg-8
          .bg-color-1.p-4.mb-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El ejercicio del derecho requiere no solo conocimientos técnicos y habilidades argumentativas, sino también un profundo compromiso ético. En este sentido, el Decálogo del Abogado, escrito por el jurista uruguayo Eduardo J. Couture, es un referente esencial para la formación y práctica de los abogados, en el mundo hispanohablante. Este conjunto de principios guía la conducta profesional del abogado, destacando valores como la lealtad, la preparación constante y el respeto a la justicia.
      
          p(data-aos="fade-left") El Decálogo del Abogado se ha convertido en un texto de referencia en facultades de derecho y colegios de abogados, sirviendo como una guía para quienes ejercen esta disciplina:
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")


      .row.align-items-center.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/3.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
        .col-lg-8
          LineaTiempoD.color-primario.large(data-aos="fade-right")
            div(numero="1" titulo="Ama tu profesión")
              p Este primer principio enfatiza la vocación en el ejercicio del derecho. Un abogado debe sentir pasión por su trabajo, pues solo así podrá desempeñarlo con compromiso y responsabilidad.
              p La abogacía no es solo un medio para obtener beneficios económicos; es una profesión que implica una responsabilidad social y una contribución a la justicia. Quienes ejercen el derecho sin amor por su labor, pueden caer en la negligencia, el desinterés o, incluso, en conductas antiéticas.
            div(numero="2" titulo="Estudia")
              p El derecho es una disciplina en constante evolución. Las leyes cambian, la jurisprudencia se actualiza y surgen nuevas interpretaciones jurídicas. Un abogado que no estudia regularmente, pronto quedará obsoleto.
              p Couture subraya que la preparación no termina con la obtención del título, sino que debe ser un esfuerzo continuo. La actualización y la formación constantes permiten al abogado ofrecer un servicio de calidad y estar a la altura de los desafíos que plantea su profesión.
            div(numero="3" titulo="Lucha")
              p Este principio destaca la función social del abogado como defensor de la justicia. Más allá de representar intereses particulares, el abogado tiene el deber de contribuir a la equidad y al respeto del derecho.
              p En la práctica, esto significa que el abogado no debe defender causas injustas ni actuar de manera contraria a la moral y la ética. La lucha por la justicia debe ser una convicción personal que oriente cada una de sus decisiones.
            div(numero="4" titulo="Trabaja")
              p El éxito en la abogacía no se logra únicamente con talento o conocimientos teóricos; requiere esfuerzo, dedicación y disciplina. La preparación de un caso demanda largas horas de estudio, análisis de pruebas y estrategias procesales.
              p El abogado debe ser diligente y meticuloso en su trabajo, evitando la improvisación y la falta de seriedad. Un profesional que trabaja con ahínco es aquel que se compromete con cada asunto que asume, sin importar su complejidad.
            div(numero="5" titulo="Sé leal")
              p La relación entre abogado y cliente se basa en la confianza. El cliente deposita en el abogado la defensa de sus intereses, esperando de él honestidad, confidencialidad y compromiso.
              p Este principio no significa que el abogado deba respaldar cualquier acción de su cliente, sino que debe actuar siempre en su mejor interés, con transparencia y dentro del marco legal. La lealtad al cliente no debe confundirse con encubrimiento ni con la justificación de actos ilícitos.

      
      
      .row.align-items-center.mb-5
        .col-lg-8
          LineaTiempoD.color-primario.large(data-aos="fade-right")
            div(numero="6" titulo="Tolera")
              p Este principio se refiere a la importancia de la empatía y el respeto por las ideas y argumentos del otro. En el ejercicio del derecho, es común encontrarse con posiciones opuestas, ya sea en litigios, en debates doctrinales o en la interpretación de normas. Couture nos recuerda que debemos estar dispuestos a escuchar y comprender la postura del adversario, incluso si no estamos de acuerdo con ella.
            div(numero="7" titulo="Olvida")
              p Se advierte sobre el peligro de acumular resentimientos. La abogacía puede ser intensa y emocionalmente desgastante, porque muchas veces los abogados se involucran en disputas difíciles. Sin embargo, es fundamental no dejar que las emociones negativas (rencor, frustración o soberbia), se instalen en la vida de los profesionales.
            div(numero="8" titulo="Piensa")
              p Un abogado debe desarrollar un criterio propio, basado en el conocimiento, la reflexión y la ética. No debe dejarse influenciar por intereses ajenos, ni actuar conforme a presiones externas.
              p Este principio cobra especial relevancia en situaciones donde el abogado enfrenta dilemas éticos o conflictos de interés. Pensar con independencia significa tomar decisiones basadas en la razón y en los principios jurídicos, sin ceder a presiones económicas, políticas o emocionales.
            div(numero="9" titulo="Ten paciencia")
              p El derecho es una disciplina que requiere tiempo y perseverancia. Los procesos judiciales pueden ser largos y complejos, y el abogado debe aprender a manejar la espera con serenidad.
              p Este principio también se aplica a la relación con los clientes, quienes muchas veces esperan resultados inmediatos. La paciencia permite al abogado mantener la calma en situaciones difíciles y persistir en la búsqueda de justicia.
            div(numero="10" titulo="Ten fe")
              p El último principio del decálogo es una exhortación a confiar en el derecho como herramienta para alcanzar la justicia. A pesar de las imperfecciones del sistema legal y de las injusticias que puedan existir, el abogado debe creer en la capacidad del derecho para mejorar la sociedad.
              p Tener fe en el derecho, significa también asumir la responsabilidad de contribuir a su mejora, denunciando irregularidades y promoviendo una práctica jurídica ética y honesta.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/4.png", alt="", data-aos="zoom-in")


      .bg-full-width-2.bg-fondo-6
        .px-4.px-md-5.py-4

          h2 Aplicación del Decálogo del Abogado en la actualidad

          p El Decálogo del Abogado sigue siendo una referencia indispensable en la práctica del derecho. Sin embargo, su aplicación enfrenta desafíos en la sociedad actual:


          div.row.justify-content-center.align-items-stretch.mb-5
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/5.svg"
                  alt=""
                  style="width: 90px"
                )
                h5.text-center La ética profesional en tiempos de corrupción
                p.mb-0.text-center En muchas sociedades, la corrupción dentro del sistema judicial, es una realidad preocupante. Aplicar los principios del decálogo implica rechazar prácticas corruptas y defender la legalidad a pesar de las presiones externas.
          
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/6.svg"
                  alt=""
                  style="width: 90px"
                )
                h5.text-center La importancia de la actualización jurídica
                p.mb-0.text-center En un mundo donde las leyes cambian constantemente, la formación continua es más importante que nunca. Un abogado que no estudia, se vuelve obsoleto y pierde su capacidad de brindar una defensa eficaz.
          
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/7.svg"
                  alt=""
                  style="width: 90px"
                )
                h5.text-center La tecnología y el ejercicio del derecho
                p.mb-0.text-center El avance tecnológico ha transformado la abogacía, desde el uso de Inteligencia Artificial hasta la digitalización de procesos judiciales. Adaptarse a estos cambios sin perder los principios éticos del decálogo es un reto clave para el abogado moderno.
          

      

      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/40143" target="_blank" rel="noopener noreferrer") Couture, E. (2017). Los mandamientos del abogado. Editorial Miguel Ángel Porrúa.
  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=v8lRc8z-j44" target="_blank" rel="noopener noreferrer") Chinchilla Sánchez, Lic. W. (2021 El Abogado Independiente o Autónomo, Algunas De Sus Características
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Qué filósofo de la Antigua Grecia es conocido por su enfoque en la ética de la virtud, donde la felicidad (eudaimonía) se alcanza mediante la práctica constante de la virtud?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Sócrates.', esCorrecta: false },
              { id: 'b', texto: 'Platón.', esCorrecta: false },
              { id: 'c', texto: 'Aristóteles.', esCorrecta: true },
              { id: 'd', texto: 'Epicuro.', esCorrecta: false },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: '¿Cuál de los siguientes es un ejemplo de ética aplicada?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'La reflexión sobre los fundamentos filosóficos del bien y el mal.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'La creación de un sistema de normas morales universales.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'El análisis de las implicaciones morales de las decisiones en el ámbito médico.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'La discusión teórica sobre la naturaleza de la moralidad.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál es una de las teorías más comunes sobre el origen de la moral?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'La moral proviene exclusivamente de los mandatos divinos.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'La moral surge como un producto de la evolución social y cultural de los seres humanos.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'La moral es innata y no cambia a lo largo del tiempo.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'La moral es un conjunto de reglas impuestas por el Estado para mantener el orden.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: '¿Qué enfoque tiene la ética en comparación con la moral?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'La ética se basa en la aplicación estricta de normas, mientras que la moral solo analiza los principios.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'La ética es un análisis filosófico que reflexiona sobre los principios morales, mientras que la moral establece normas de conducta dentro de una sociedad.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'La moral es solo para la vida profesional, mientras que la ética solo se refiere a la vida privada.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'La ética impone reglas mientras que la moral no tiene reglas fijas.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'Según el decálogo del abogado, ¿qué actitud debe tener un abogado frente a la competencia profesional?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'El abogado debe tratar de superar a sus colegas con cualquier medio necesario.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'El abogado debe respetar y fomentar la competencia leal, sin descalificar a otros profesionales.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'El abogado debe evitar toda competencia profesional para asegurar su éxito.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'El abogado debe siempre trabajar en solitario para evitar conflictos con otros abogados.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
