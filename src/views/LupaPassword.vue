<template>
  <v-container>
    <v-layout style="margin-top: 150px">
      <v-flex sm12 md6 offset-md3>
        <v-card>
          <v-col>
            <v-row>
              <v-col md="12">
                <v-text-field type="email" label="Email" outline></v-text-field>
              </v-col>
              <v-col md="12">
                <v-btn color="primary">Kirim Email</v-btn>
              </v-col>
              <v-col md="12">
                <p>Login? <router-link to="/">Klik disini</router-link></p>
              </v-col>
            </v-row>
          </v-col>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>