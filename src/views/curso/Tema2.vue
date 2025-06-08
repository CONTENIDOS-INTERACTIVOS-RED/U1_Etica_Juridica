<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. La moral'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 La moral es el conjunto de valores, principios y normas que regulan el comportamiento de las personas dentro de una sociedad, estableciendo lo que se considera bueno o malo, correcto o incorrecto, justo o injusto. A diferencia de la ética, que es una disciplina filosófica que reflexiona sobre la moral, la moral es más concreta y se manifiesta en la práctica cotidiana a través de reglas de conducta que influyen en la vida individual y colectiva. La moral no es un concepto absoluto, sino que depende del contexto social, histórico y cultural, en el que se desarrolla. Por ejemplo, en algunas sociedades es moralmente aceptable la pena de muerte como castigo, mientras que, en otras, se considera un acto inmoral e inhumano.
            
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El origen de la moral está ligado al desarrollo de las comunidades humanas, dado que desde tiempos primitivos los grupos sociales establecen normas de convivencia para garantizar su supervivencia y cohesión. 
      
          p(data-aos="fade-left").mb-4 La moral ha estado influenciada por diversas fuentes, como la religión, la filosofía y las costumbres sociales. En muchas culturas, las doctrinas religiosas han desempeñado un papel central en la configuración de las normas morales, estableciendo reglas sobre lo que se debe y no se debe hacer. Sin embargo, en las sociedades modernas y secularizadas, la moral también se fundamenta en principios racionales y filosóficos, como la idea de los derechos humanos, la dignidad de las personas y la justicia social. Esto ha llevado a que las normas morales evolucionen con el tiempo, adaptándose a nuevas circunstancias y desafíos éticos.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      
  
      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Diferencias entre moral y ética


      .row.mb-5.align-items-center
        .col-lg-8
          p Aunque los términos moral y ética suelen utilizarse indistintamente, tienen diferencias importantes en su significado y aplicación. Mientras que la moral se refiere al conjunto de normas y valores que guían el comportamiento de las personas en una sociedad, la ética es la disciplina filosófica que reflexiona sobre esos valores, analizando su validez y fundamentación.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/3.svg", alt="")


      .row.align-items-center.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/4.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
        .col-lg-8
          
          LineaTiempoD.color-primario.large(data-aos="fade-right")
            div(numero="1" titulo="Definición y enfoque")
              p #[strong Moral:] Es el conjunto de normas, valores y costumbres aceptadas por una sociedad o un individuo. Se basa en la tradición, la educación y la cultura, influyendo en la manera en que las personas juzgan lo que es bueno o malo, en su vida cotidiana.
              p #[strong Ética:] Su origen es filosófico. Aunque puede influenciarse por la moral, busca principios universales que trasciendan contextos específicos.

            div(numero="2" titulo="Origen y variabilidad")
              p #[strong Moral:] Tiene un origen social y cultural. Cambia con el tiempo y varía, según la comunidad, la religión o la época histórica.
              p #[strong Ética:] Su origen es filosófico. Aunque puede influenciarse por la moral, busca principios universales que trasciendan contextos específicos.
            div(numero="3" titulo="Aplicación")
              p #[strong Moral:] Se aplica de manera práctica en la vida cotidiana, a través de normas específicas, como “no mentir” o “ayudar a los demás”.
              p #[strong Ética:] Se aplica en un nivel más teórico, reflexionando sobre dilemas morales complejos, como la bioética, la justicia social o los derechos humanos.


      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] El origen y evolución de la moral


      p Las normas morales han existido desde tiempos remotos y han evolucionado junto con la humanidad. De acuerdo con Vásquez y Gómez (2019), los principios morales surgen con la aparición del ser humano, dado que en su naturaleza está implícita la necesidad de establecer normas:


      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slide-1.png")
              .col-lg-7.order-lg-1
                h4 Moral Primitiva
                p Según los autores, se caracterizó por una moral de ayuda mutua para la obtención de alimentos, protección, construcción.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slide-2.png")
              .col-lg-7.order-lg-1
                h4 Moral en la Antigüedad
                p Divide a la sociedad y establece jerarquías entre los sujetos. Los filósofos griegos fueron los primeros en reflexionar sobre la moral desde una perspectiva filosófica. Sócrates, por ejemplo, afirmaba que la moral debía basarse en la búsqueda de la verdad y el conocimiento. Platón consideraba que la justicia y el bien eran valores universales, mientras que Aristóteles desarrolló la idea de la ética de la virtud, donde la moralidad se logra mediante el desarrollo de hábitos virtuosos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slide-3.png")
              .col-lg-7.order-lg-1
                h4 Moral en la Edad Media
                p Durante la Edad Media, la moral estuvo fuertemente influenciada por la religión, especialmente por el cristianismo, el islam y el judaísmo. Las normas morales estaban vinculadas a la voluntad divina y se consideraba que el comportamiento humano debía alinearse con los mandamientos de Dios.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slide-3.png")
              .col-lg-7.order-lg-1
                h4 Moral en la Modernidad
                p Hay un desprendimiento de los valores de la iglesia y se empieza a tener una mentalidad más individual, enfocada en la honradez, la felicidad, entre otros.
      

      #t_2_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.3] Los valores morales: definición e importancia


      .row.mb-4
        .col-lg-8
          p(data-aos="fade-left").mb-4 Los valores morales son principios o ideales que orientan el comportamiento humano y permiten diferenciar entre lo que se considera bueno o malo, correcto o incorrecto dentro de una sociedad. Estos valores sirven como guía para la convivencia y la toma de decisiones en la vida cotidiana, puesto que influyen en las normas de conducta y en la manera en que las personas se relacionan entre sí.
      
          .bg-color-4.p-4.mb-5
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Los valores morales no son universales ni inmutables, sino que dependen del contexto cultural, histórico y social, en el que se desarrollan. Lo que en una sociedad se considera moralmente aceptable, puede no serlo en otra. Sin embargo, hay valores que suelen ser compartidos por la mayoría de las culturas, como la honestidad, el respeto o la justicia, porque favorecen la armonía social y el bienestar común.
      
      
          p(data-aos="fade-left").mb-4 Algunos ejemplos de valores morales, son:
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")


    
      
      .bg-full-width.bg-fondo-5
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.mb-5
            .col-lg-12
      
              SlyderF(columnas="col-12 col-lg-4")
                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema2/7.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Honestidad
                  p.text-center Actuar con verdad y transparencia, sin engañar a los demás.
                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema2/8.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Respeto
                  p.text-center Reconocer y valorar los derechos y la dignidad de las demás personas.
                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema2/9.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Responsabilidad
                  p.text-center Cumplir con los compromisos y asumir las consecuencias de los hechos propios.
                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema2/10.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Solidaridad
                  p.text-center Ayudar a los demás y actuar con empatía hacia quienes lo necesitan.
                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema2/11.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Justicia
                  p.text-center Obrar con equidad, dando a cada quien lo que le corresponde.
                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema2/12.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Tolerancia
                  p.text-center Aceptar y respetar la diversidad de opiniones, creencias y formas de vida.
                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema2/13.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Libertad
                  p.text-center Actuar, según la propia voluntad, sin dañar a otros ni violar normas morales.
                

      
      .bg-full-width.bg-color-5.mb-5
        .px-4.px-md-5.py-4.d-flex.align-items-center
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/14.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En conclusión, los valores morales son esenciales para la convivencia y el desarrollo social, debido a que proporcionan un marco de referencia para el comportamiento humano. Aunque pueden variar con el tiempo y la cultura, su función principal es promover una sociedad basada en principios que favorezcan el respeto, la justicia y el bienestar común.
      
      h2 Clasificación de los valores morales
            
      p Los valores morales pueden clasificarse en diferentes categorías, según su función y la forma en que influyen en la conducta humana. Aunque no hay una única clasificación universal, a continuación se presentan las principales categorías, en las que suelen dividirse:


      .row.align-items-start.mb-5
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="Valores individuales")
              p Son aquellos que guían el comportamiento de una persona en su vida cotidiana y en la toma de decisiones personales. Se relacionan con la integridad y la responsabilidad de cada individuo.
              p #[strong Ejemplos:]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Honestidad:] Actuar con sinceridad y decir la verdad.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Responsabilidad:] Cumplir con los deberes y asumir las consecuencias de las acciones personales.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Autodisciplina:] Controlar impulsos y actuar con moderación.

            .div(titulo="Valores sociales")
              p Son los que regulan la convivencia dentro de una comunidad y permiten establecer relaciones armoniosas entre las personas. Su objetivo es fomentar el respeto y la solidaridad dentro de la sociedad.
              p #[strong Ejemplos:]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Respeto:] Reconocer los derechos y la dignidad de los demás.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Solidaridad:] Brindar apoyo a quienes lo necesitan.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Tolerancia:] Aceptar la diversidad de ideas, culturas y formas de vida.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Justicia:] Actuar con equidad, dando a cada quien lo que le corresponde.

            .div(titulo="Valores universales")
              p Son aquellos que se consideran fundamentales en la mayoría de las culturas y sociedades, dado que favorecen la convivencia y el desarrollo humano. Se vinculan con principios esenciales para la vida en comunidad.
              p #[strong Ejemplos:]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Libertad:] Derecho a actuar, según la propia voluntad, sin perjudicar a los demás.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Igualdad:] Tratar a todas las personas con equidad, sin discriminación.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Paz:] Resolver los conflictos sin recurrir a la violencia.



        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/15.png", alt="").mb-4.mb-lg-0


      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/16.png", alt="").mb-4.mb-lg-0
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="Valores éticos")
              p Son aquellos que surgen de la reflexión filosófica sobre el bien y el mal. Están relacionados con principios racionales que buscan fundamentar la moralidad en todas las esferas de la vida.
              p #[strong Ejemplos:]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Dignidad humana:] Reconocer el valor inherente de cada persona.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Compromiso con la verdad:] Buscar la objetividad y la honestidad en todas las acciones.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Bien común:] Actuar en beneficio de la sociedad y no solo en interés propio.

            .div(titulo="Valores instrumentales")
              p Son aquellos que ayudan a alcanzar otros valores más amplios, como la justicia o la libertad. Se refieren a habilidades o actitudes necesarias para lograr un objetivo moral.
              p #[strong Ejemplos:]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Perseverancia:] Mantener el esfuerzo para alcanzar metas positivas.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Paciencia:] Saber esperar y actuar con calma, ante dificultades.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Diálogo:] Resolver conflictos mediante la comunicación y el entendimiento.
      
      

      

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/38981" target="_blank" rel="noopener noreferrer") Rosmini, A. (2010). Principios de la ciencia moral. Plaza y Valdés (México). 
  
 
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=N8wm61qWiRY" target="_blank" rel="noopener noreferrer") Navarro Martínez, E. (2016) ¿Qué es la moral?
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
