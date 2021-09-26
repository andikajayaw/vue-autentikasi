<template>
  <v-container>
    <v-layout wrap style="margin-top: 75px">
      <v-flex sm12 md6 offset-md3>
        <v-card>
          <v-col>
            <v-row>
              <v-col>
                <v-text-field
                  outline
                  label="Nama Lengkap"
                  type="text"
                ></v-text-field>
                <v-text-field
                  outline
                  label="Username"
                  type="text"
                ></v-text-field>
                <v-text-field outline label="Email" type="email"></v-text-field>
                <v-text-field
                  outline
                  label="Password"
                  type="password"
                ></v-text-field>
                <v-text-field
                  outline
                  label="Confirm Password"
                  type="password"
                ></v-text-field>
              </v-col>
              <v-col md="12">
                <v-row>
                  <v-col md="12">
                    <v-btn color="primary">Daftar</v-btn>
                  </v-col>
                  <v-col
                    ><p>
                      Sudah punya akun?
                      <router-link to="/">Klik disini</router-link>
                    </p></v-col
                  >
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>