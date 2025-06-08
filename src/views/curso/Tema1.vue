<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. La ética'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La ética es una rama de la filosofía que estudia la moral y el comportamiento humano en relación con lo que se considera bueno o malo. Su importancia radica en que orienta las decisiones y acciones en diversos ámbitos de la vida, desde la esfera personal, hasta la social y profesional. A lo largo de la historia, la ética ha evolucionado y se ha desarrollado en distintas corrientes filosóficas, cada una con su propia interpretación de los principios que deben regir la conducta humana.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
    

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Historia de la ética

    p.mb-5 La ética ha sido una preocupación central en la filosofía a lo largo de la historia, evolucionando desde los planteamientos de la virtud en la Antigüedad, hasta las reflexiones contemporáneas sobre la moralidad en un mundo globalizado y plural. A lo largo de los siglos, diferentes corrientes filosóficas han intentado responder preguntas fundamentales sobre el bien, el deber, la felicidad y la justicia, reflejando las preocupaciones de cada época. A continuación, se presentan las principales etapas en la historia de la ética, con sus pensadores más influyentes y sus respectivas contribuciones:

    h3 Ética en la Antigüedad

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            
            .col-lg-7.order-lg-1
              h4 Platón
              p Platón (2004), propuso una ética basada en su Teoría de las Ideas, en la que el bien supremo es la idea más elevada y el fundamento de todo lo existente. En “La República”, desarrolla la noción de justicia como armonía entre las tres partes del alma humana: la razón, el espíritu y los deseos. Según Platón, una persona justa es aquella en la que la razón gobierna sobre los impulsos, y una sociedad recta es aquella en la que cada clase social (filósofos, guardianes y productores) cumple su función de manera equilibrada. Para alcanzar la virtud, el ser humano debe esforzarse por conocer el bien y actuar en conformidad con él.
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-1.png")
          .row.align-items-center.p-4.p-md-5
            
            .col-lg-7.order-lg-1
              h5 Aristóteles
              p En contraste con Platón, Aristóteles (2004), desarrolló una ética de la virtud, en la que el objetivo principal de la vida humana es la eudaimonía, o felicidad, alcanzada a través de la práctica de virtudes como la prudencia, la justicia y la templanza. En “Ética a Nicómaco”, sostiene que la virtud es un hábito adquirido mediante la repetición de actos justos y que el equilibrio entre los extremos (término medio), es la clave para una vida ética. Para Aristóteles, la felicidad no es solo placer, sino una actividad racional que perfecciona la naturaleza humana.

            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-2.png")

    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5.py-4

        h3 Estoicismo y epicureísmo

        p Dos escuelas filosóficas posteriores, el estoicismo y el epicureísmo, ofrecieron perspectivas distintas sobre la moral:


        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/tarjeta-1.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Estoicismo
                p.mb-0.text-center Los estoicos, como Séneca y Epicteto, defendieron una ética basada en la razón y la aceptación del destino. Creían que el sabio debía alcanzar la apatheia, un estado de imperturbabilidad, dominando sus pasiones y viviendo conforme a la naturaleza.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/tarjeta-2.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Epicureísmo
                p.mb-0.text-center Por otro lado, los epicúreos, seguidores de Epicuro, sostenían que el fin de la vida era el placer, entendido como la ausencia de dolor y perturbaciones. Promovían una vida sencilla y moderada, para evitar el sufrimiento innecesario.

        
    h3 Ética en la Edad Media

    p.mb-5 Durante la Edad Media, la ética estuvo fuertemente influenciada por la religión cristiana, y los pensadores de este período intentaron conciliar la filosofía clásica, con la teología cristiana:

    .row.align-items-center.mb-4.justify-content-center.mb-5
      .col-lg-10
        LineaTiempoD.color-primario.large(data-aos="fade-right")
          div(numero="1" titulo="San Agustín de Hipona")
            
            figure.mb-4
              img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in", style="max-width: 350px").mx-auto
            
            
            p San Agustín, inspirado en Platón, argumentó que el verdadero bien es Dios y que la felicidad solo puede alcanzarse a través de la fe y la vida espiritual. Plantea una ética basada en el amor a Dios, como principio rector de la conducta humana. Además, introduce la noción del libre albedrío, que es un don otorgado por Dios a los seres humanos, que les permite elegir entre el bien y el mal. Sin embargo, su concepción del libre albedrío está profundamente influenciada por su visión teológica sobre el pecado y la gracia.

            p Agustín sostiene que el libre albedrío es necesario para la responsabilidad moral, dado que sin él, el ser humano no podría ser culpable de sus pecados, ni merecedor de recompensa por sus buenas acciones. Sin embargo, también afirma que, debido al pecado original, la voluntad humana se ha inclinado hacia el mal, por lo que necesita de la gracia divina para poder elegir el bien. En este sentido, el libre albedrío sin la ayuda de Dios, está debilitado y tiende a conducir al pecado.
          div(numero="2" titulo="Santo Tomás de Aquino")
            figure.mb-4
              img(src="@/assets/curso/tema1/3.png", style="max-width: 400px").mx-auto
            
            p Santo Tomás, influenciado por Aristóteles, desarrolló la ética de la ley natural, argumentando que la moral se basa en la razón y en la naturaleza humana, creada por Dios. Sostiene que la ley natural permite a los seres humanos conocer el bien y orientar sus acciones hacia su fin último, que es la felicidad en la comunión con Dios. La virtud sigue siendo fundamental, pero es perfeccionada por la gracia divina.

    h2 Ética en la Edad Moderna y Edad Contemporánea

    p La evolución del pensamiento ético desde la Edad Moderna hasta la Edad Contemporánea, ha marcado un giro decisivo en la comprensión de la moralidad, al pasar de visiones teológicas a enfoques centrados en la razón, la autonomía, la utilidad y la solidaridad.

    .bg-full-width.bg-color-4.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/4.png', alt='')
    
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Ética en la Edad Moderna y Edad Contemporánea
            p.mb-4(data-aos="fade-right") En el PDF Ética en la Edad Moderna y Edad Contemporánea, se abordan las contribuciones de autores como Spinoza, Hume, Kant, Rorty, Levinas y Habermas, cuyas propuestas ofrecen diferentes perspectivas para analizar la libertad, el deber, la alteridad y la justicia, en contextos históricos y sociales diversos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ética en la Edad Moderna y Edad Contemporánea
    

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Aproximaciones éticas

    p.mb-5 Además de las aproximaciones históricas, la ética es estudiada a partir de ciertas ramas. En estas, algunos filósofos son los principales exponentes, como Aristóteles, Kant y Bentham, quienes dejaron las bases para el desarrollo de nuevas discusiones y propuestas éticas.

    h3 Ética de la virtud

    .row.mb-5
      .col-lg-8
        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La ética de la virtud es una corriente filosófica que se centra en el desarrollo del carácter moral del individuo en lugar de enfocarse exclusivamente en reglas o consecuencias de las acciones. Según Aristóteles, las virtudes son disposiciones estables del carácter, que permiten actuar correctamente y llevar una vida plena. Estas virtudes se dividen en intelectuales, relacionadas con el conocimiento y la sabiduría, y morales, que incluyen cualidades como la justicia, la valentía y la templanza. La clave para una vida virtuosa es encontrar el justo medio entre los extremos de exceso y defecto; por ejemplo, la valentía es la virtud intermedia entre la temeridad (exceso) y la cobardía (defecto).

    
        p(data-aos="fade-left") A diferencia de las teorías deontológicas, como la de Kant, que establecen principios morales universales, y del utilitarismo, que evalúa la moralidad, según sus consecuencias, la ética de la virtud pone énfasis en el carácter y en la formación de hábitos morales. No se trata solo de actuar bien en una situación particular, sino de ser una persona buena en todos los aspectos de la vida.

    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in")


    h3 Deontologismo

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/7.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 El deontologismo es una corriente ética que sostiene que la moralidad de una acción no depende de sus consecuencias, sino de si cumple con un deber o norma moral. Esta perspectiva se basa en la idea de que existen principios universales que determinan lo que es correcto o incorrecto, independientemente de los resultados que produzcan.
        p.mb-4 El principal representante del deontologismo es Immanuel Kant, quien desarrolló su teoría en la “Fundamentación de la metafísica de las costumbres”. Kant argumenta que la moralidad debe basarse en la razón, y no en sentimientos o intereses personales. Para él, la clave de la ética es el imperativo categórico, una norma que ordena actuar de manera que la máxima de nuestra acción pueda convertirse en una ley universal. Es decir, antes de actuar, debemos preguntarnos: Si todos hicieran esto, ¿el mundo sería moralmente aceptable?
    
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 El deontologismo se opone a corrientes como el utilitarismo, que valora la moralidad, según las consecuencias. Mientras que un utilitarista justificaría una mentira si genera más bienestar, un deontólogo kantiano diría que mentir es incorrecto en cualquier circunstancia, porque viola un deber moral.


    h3 Utilitarismo

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") El utilitarismo es una corriente ética que sostiene que la moralidad de una acción se evalúa, según sus consecuencias, y que la mejor acción es aquella que maximiza la felicidad y minimiza el sufrimiento para la mayor cantidad de personas. Es una forma de consecuencialismo, porque prioriza los efectos de las acciones sobre su intención o conformidad, con normas universales.
    
        .bg-color-3.p-4(data-aos="fade-left")
          p.mb-0 El utilitarismo fue desarrollado en el siglo XVIII por #[strong Jeremy Bentham], quien formuló el principio de utilidad, según el cual una acción es moralmente correcta si produce el mayor balance de placer sobre dolor. Para medir esto, Bentham propuso un cálculo utilitario, que considera factores como la intensidad, duración y extensión del placer o dolor generado.
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in")


    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Aplicaciones de la ética

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/9.png', alt='')
    
    
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La ética aplicada, es la rama de la Ética que analiza cómo los principios morales se aplican a situaciones concretas en distintos ámbitos de la sociedad. A diferencia de la ética normativa, que establece criterios generales sobre lo correcto o incorrecto, la ética aplicada se enfoca en casos específicos y dilemas reales que requieren soluciones basadas en valores morales. En la actualidad, su importancia ha crecido, debido a los avances tecnológicos, científicos y sociales, que han generado nuevos desafíos éticos.

    .row.mb-4
      .col-lg-8
        h2.mb-4 Escenarios de aplicación de la ética
    
        p(data-aos="fade-left").mb-5 La Ética no es solo un ejercicio filosófico abstracto, sino que tiene aplicaciones concretas en distintos ámbitos de la sociedad. Su estudio permite orientar la toma de decisiones y evaluar la corrección de las acciones en función de valores como la justicia, la libertad, la responsabilidad y el bien común. A continuación, se presentan algunos de los principales escenarios donde la ética se aplica de manera práctica:

        h3 A. Ética personal y cotidiana

        p La ética influye en la vida diaria de las personas, debido a que orienta sus decisiones y relaciones con los demás. En este ámbito, la ética se manifiesta en el respeto por la dignidad humana, la honestidad, la solidaridad y la responsabilidad individual. Situaciones como decir la verdad, cumplir con los compromisos, ayudar a otros o actuar con integridad en la vida personal, reflejan la aplicación de principios éticos en lo cotidiano.


    
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in").mb-4.mb-lg-0
    

    h3 B. Ética profesional

    p Cada profesión tiene principios y normas éticas específicas que buscan garantizar el ejercicio responsable de la actividad laboral. Algunos ejemplos son:

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/info1.png', alt='', style="max-width: 588px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="55%" y="45%" numero="+")
                h5 01. Ética médica y bioética

                p Los médicos deben actuar conforme al principio de beneficencia (hacer el bien), no maleficencia (no causar daño), autonomía del paciente y justicia en el acceso a la salud.
    
              .bg-color-white.box-shadow.p-3(x="75%" y="45%" numero="+")
                h5 02. Ética empresarial

                p Los investigadores deben garantizar la integridad de los datos, la transparencia en los procesos y la responsabilidad en el uso de recursos.
    
              .bg-color-white.box-shadow.p-3(x="36%" y="90%" numero="+")
                h5 03. Ética jurídica

                p Guía a los abogados, jueces y demás actores del sistema de justicia, para que su actuar sea imparcial y en beneficio del bien común. 
    
              .bg-color-white.box-shadow.p-3(x="56%" y="90%" numero="+")
                h5 04. Ética periodística

                p Exige que los periodistas informen con veracidad, imparcialidad y respeto a los derechos de las personas. 
    
              .bg-color-white.box-shadow.p-3(x="75%" y="90%" numero="+")
                h5 05. Ética en la ingeniería y la tecnología

                p Implica garantizar la seguridad, la sostenibilidad y la protección de los derechos humanos en el diseño y desarrollo de productos tecnológicos.
    
    .bg-full-width-2.bg-fondo-3
      .px-4.px-md-5.py-4

    
        h3 C. Ética en la ciencia y la tecnología

        p El avance científico y tecnológico, plantea importantes dilemas éticos que deben ser considerados para garantizar que el desarrollo humano no sea perjudicado. Algunos ejemplos son:


        div.row.justify-content-center.align-items-stretch
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/11.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center Ética en la Inteligencia Artificial
              p.mb-0.text-center Se deben establecer límites al uso de la IA para evitar sesgos, discriminación y violaciones a la privacidad.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/12.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center Ética en la genética
              p.mb-0.text-center La manipulación genética, la clonación y la edición del ADN, plantean debates sobre sus implicaciones morales y sus posibles riesgos.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/13.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center Ética en la investigación científica
              p.mb-0.text-center Requiere que los experimentos sean realizados con integridad, evitando fraudes y garantizando el respeto por los sujetos de estudio.
        
    h3 D. Ética ambiental
    
    p El deterioro del medio ambiente ha llevado al desarrollo de la ética ambiental, que busca concientizar sobre la responsabilidad del ser humano en la protección del planeta. Los principales temas en este campo, incluyen:
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure
              img(src="@/assets/curso/tema1/14.svg" alt="" style="max-width: 400px;").mx-auto.mb-4.mb-lg-0
          .col-lg-8
            ul.lista-ul--color
              li.mb-2
                i.fas.fa-arrow-circle-right
                | La lucha contra el cambio climático.
    
              li.mb-2
                i.fas.fa-arrow-circle-right
                | La protección de la biodiversidad y los ecosistemas.

              li.mb-2
                i.fas.fa-arrow-circle-right
                | El uso responsable de los recursos naturales y la sostenibilidad.

              li.mb-2
                i.fas.fa-arrow-circle-right
                | La equidad intergeneracional, asegurando que las futuras generaciones puedan disfrutar de un medio ambiente sano.


    .row.mb-5
      .col-lg-8
        h2.mb-5 Importancia de la ética en la sociedad
    
   
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 La ética es fundamental para la convivencia y el desarrollo de sociedades justas y equitativas. Sin principios éticos, la vida en comunidad se vería afectada por la corrupción, la injusticia y la falta de confianza entre las personas. La ética también influye en la formulación de leyes y normativas, que buscan proteger los derechos de los ciudadanos y garantizar el bien común.
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")
    
    
    

    
    
    
    




    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/39401" target="_blank" rel="noopener noreferrer") Torres Hernández, Z. (2015). Introducción a la ética. Grupo Editorial Patria. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=dyUVu61l2rE" target="_blank" rel="noopener noreferrer") Cátedra Alfonso Reyes. (2013). FERNANDO SAVATER - Ética en el mundo de hoy. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
