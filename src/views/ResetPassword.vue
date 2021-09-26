<template>
  <v-container>
    <v-layout wrap style="margin-top: 150px">
      <v-flex sm12 md6 offset-md3>
        <v-card>
          <v-col>
            <v-text-field
              label="Password"
              type="password"
              outline
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              label="Confirm Password"
              type="password"
              outline
            ></v-text-field>
          </v-col>
          <v-col>
            <v-btn color="primary">Reset Password</v-btn>
          </v-col>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>