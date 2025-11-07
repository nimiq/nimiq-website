<script setup lang="ts">
import type { Content } from '@prismicio/client'

const { slice } = defineProps(getSliceComponentProps<Content.TeamMembersSlice>())
</script>

<template>
  <ContentTeamMembers :slice="slice as any" />
</template>
