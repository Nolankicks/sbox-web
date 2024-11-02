<script lang="ts">
    import PackageColumn from "$lib/components/PackageColumn.svelte";
import { GetPackages, type SboxPackage } from "$lib/types/SboxWeb";
    import { onMount } from "svelte";

    let pkgs: SboxPackage[] = $state([]);

    onMount(() => {
        GetPackages().then((res) => {
            if (res !== null) {
                pkgs = res;
            }
        });
    });
</script>

{#if pkgs}
    <PackageColumn SboxPackages={pkgs} />
{/if}