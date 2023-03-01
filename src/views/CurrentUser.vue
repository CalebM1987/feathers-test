<script lang="ts" setup>
import { ref } from "vue";
import { user, accessToken, scope } from "@/store";
import { logout } from "@/api";

const tokenIcon = ref<"lock" | "lock_open">("lock");
const defaultAvatar = "https://cdn.quasar.dev/img/boy-avatar.png";

</script>

<template>
  <div class="q-pa-md row items-start q-gutter-md user-container">
    <q-card class="user-card">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img :src="user?.profilePicture ?? defaultAvatar" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Feathers Test</q-item-label>
          <q-item-label caption>
            {{ user?.email ?? "N/A" }}
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-btn round color="red" icon="logout" @click="logout">
            <q-tooltip class="bg-red" :offset="[10, 10]">
              Logout
            </q-tooltip>
          </q-btn>
        </q-item-section>
      </q-item>
      <hr />
      <q-card-section class="q-ma-md">
        Welcome to the Feathers test app. You have authenticated with the <strong>{{ scope }}</strong> strategy.
      </q-card-section>

      <q-card-section>
        <q-list bordered class="rounded-borders">
          <q-expansion-item
            expand-separator
            :icon="tokenIcon"
            label="Access Token"
            @before-show="() => (tokenIcon = 'lock_open')"
            @after-hide="() => (tokenIcon = 'lock')"
          >
            <q-card>
              <q-card-section>
                <q-input
                  readonly
                  autogrow
                  filled
                  v-model="accessToken"
                  type="textarea"
                />
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </q-card-section>
    </q-card>
  </div>
</template>

<style>
.user-card {
  width: 400px;
}
</style>
