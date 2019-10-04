<template>
  <div>
    <h2>Stepper</h2>
    <p class="intro-text text-margin-bottom">
      A stepper is an interactive multi-step process indicator that guides users to complete a set of questions. 
    </p>

    <h3>Vertical Steppers</h3>
    <p>
      Vertical steppers are used when the total number of questions per user path is not fixed, and each subsequent question is dependent on the answer to the previous question. 
    </p>
    <p>
      Each step consists of a question and an input section with relevant form elements. Checkboxes are used when users can select one or more options while radio buttons are used when they can only make a single selection. After the user completes a step, the next step anchors down. The final step should have a clear call-to-action button that best represents the results that the user will be getting from completing the set of questions. 
    </p>
    <p>
      Vertical steppers must have a minimum of two steps. Stepper questions and answers should be visible as the user completes the steps so that they can review their information and change their input at any time if needed. 
    </p>

    <div v-html="data.markup()" />

    <h3>Specs</h3>
    <p>
      Vertical steppers should follow the specified padding requirements outlined below. The input sections should follow its corresponding component specs in the design system. On the last step, use an icon that is relevant to the final call-to-action. 
    </p>

    <div v-html="data.grid()" />

    <ExampleRow :data="data.specs()" columns="4" />

    <h3>Accessibility</h3>
    <p>
      Vertical stepper and its elements must be available through the use of screen readers and keyboards. The different input components must follow their accessibility guidelines outlined in the design system.
    </p>
  </div>
</template>
<script>
  import Stepper from '@/assets/farmers/js/Components/Steppers/Vertical/Stepper.js'
  import data from '@/pages/_components-data/ui/stepper.js'

  export default {
    layout: 'farmers',
    head() {
      return {
        title: 'Steppers'
      }
    },
    data() {
      return {
        data: stepper_data
      }
    }
  }
</script>
