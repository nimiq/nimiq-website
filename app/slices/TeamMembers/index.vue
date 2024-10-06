<script setup lang="ts">
import type { Content } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.TeamMembersSlice>())

const items = computed(() => [...props.slice.items].sort(() => Math.random() - 0.5))
</script>

<template>
  <section bg-neutral-100>
    <ul columns="1 gap-x-2 sm:2 lg:3" style="column-rule: 2px solid rgb(var(--nq-neutral-400))">
      <li v-for="(member, i) in items" :key="i" break-inside-avoid-column nq-pb-32>
        <div v-if="hasImage(member.picture)" px-8 pt-8>
          <PrismicImage :field="member.picture" w-full rounded-6 object-cover />
        </div>
        <div v-else i-nimiq:icons-lg-person-1 text-512 />
        <div px-48 pb-48>
          <h3 text-primary nq-mt-32>
            {{ member.fullName }}
          </h3>
          <div v-if="member.role" nq-mt-12 flex="~ col">
            <span v-for="(role, j) in member.role.split(',').map((role) => role.trim())" :key="role">
              {{ role }}{{ member.role.split(',').length - 1 === j ? '' : ',' }}
            </span>
          </div>
          <PrismicRichText nq-mt-24 :field="member.description" class="nq-prose-compact" />
          <!-- <ul v-if="member..length > 0" nq-mt-16 flex="~ gap-x-16">
            <li v-for="(socialMedia, index) in member.socialMedia" :key="`${socialMedia.key}-${index}`">
              <SocialLink :social-media="socialMedia" />
            </li>
          </ul> -->
        </div>
      </li>
    </ul>
  </section>
</template>
