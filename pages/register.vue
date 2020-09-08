<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" lg="4">
        <v-card>
          <v-container>
            <h3 class="text-center">
              Register
            </h3>
            <v-divider />
            <br>
            <v-alert v-if="$v.$anyError" type="error">
              Please fix the following errors
            </v-alert>
            <v-form @submit.prevent="register">
              <v-text-field
                v-model="username"
                :error-messages="usernameErrors"
                hint="Must be alphanumeric"
                prepend-inner-icon="mdi-account"
                solo
                label="Username"
                @blur="$v.username.$touch()"
                @input="$v.username.$touch()"
              />
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                prepend-inner-icon="mdi-mail"
                solo
                label="E-mail"
                @blur="$v.email.$touch()"
                @input="$v.email.$touch()"
              />
              <v-text-field
                v-model="password"
                :error-messages="passwordErrors"
                prepend-inner-icon="mdi-key"
                type="password"
                solo
                label="Password"
                @blur="$v.password.$touch()"
                @input="$v.password.$touch()"
              />
              <v-text-field
                v-model="confirm_password"
                :error-messages="confirmPasswordErrors"
                prepend-inner-icon="mdi-key"
                type="password"
                solo
                label="Confirm Password"
                @blur="$v.confirm_password.$touch()"
                @input="$v.confirm_password.$touch()"
              />
              <v-btn color="success" type="submit" block>
                Register
              </v-btn>
            </v-form>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { minLength, email, required, sameAs, alphaNum } from 'vuelidate/lib/validators'
export default {
  middleware: 'auth',
  auth: 'guest',
  mixins: [validationMixin],
  data () {
    return {
      username: null,
      email: null,
      password: null,
      confirm_password: null
    }
  },
  validations: {
    username: {
      isUnique (value) {
        if (value === '') { return true }
        return new Promise((resolve, reject) => {
          this.$axios.get(`/validator/find-username/${value}`).then((res) => {
            const data = +res.data
            resolve(data === 0)
          }).catch((err) => {
            reject(err)
          })
        })
      },
      required,
      alphaNum,
      minLength: minLength(3)
    },
    email: {
      required,
      email,
      isUnique (value) {
        if (value === '') { return true }
        return new Promise((resolve, reject) => {
          this.$axios.get(`/validator/find-email/${value}`).then((res) => {
            const data = +res.data
            resolve(data === 0)
          }).catch((err) => {
            reject(err)
          })
        })
      }
    },
    password: {
      required,
      minLength: minLength(6)
    },
    confirm_password: {
      sameAsPassword: sameAs('password')
    }
  },
  computed: {
    usernameErrors () {
      const errors = []
      if (!this.$v.username.$dirty) { return errors }
      !this.$v.username.required && errors.push('Enter a username')
      !this.$v.username.minLength && errors.push('Minimum of 3 characters')
      !this.$v.username.alphaNum && errors.push('Cannot contain spaces')
      !this.$v.username.isUnique && errors.push('Username already exists')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) { return errors }
      !this.$v.password.required && errors.push('Enter a password')
      !this.$v.password.minLength && errors.push('Minimum of 6 characters')
      return errors
    },
    confirmPasswordErrors () {
      const errors = []
      if (!this.$v.confirm_password.$dirty) { return errors }
      !this.$v.confirm_password.sameAsPassword && errors.push('Should be equal to password')
      return errors
    },

    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) { return errors }
      !this.$v.email.required && errors.push('Provide an e-mail')
      !this.$v.email.email && errors.push('Provide a valid e-mail')
      !this.$v.email.isUnique && errors.push('E-mail already exists')
      return errors
    }
  },
  methods: {
    register () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return false
      }
      const data = {
        username: this.username,
        password: this.password,
        email: this.email
      }
      this.$axios.post('/auth/register', data).then(() => {
        this.$router.push('/login')
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.response)
      })
    }
  },

  head: {
    title: 'Register a User',
    meta: [
      { hid: 'title', name: 'title', content: 'Sign Up a user' },
      { hid: 'description', name: 'description', content: 'Sign Up a user or any new staff member' }
    ]
  }
}
</script>
