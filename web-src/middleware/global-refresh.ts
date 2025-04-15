export default defineNuxtRouteMiddleware((to, from) => {
  const router = useRouter();
  if (from.name === null) {
    router.replace(to.fullPath);
  }
});
