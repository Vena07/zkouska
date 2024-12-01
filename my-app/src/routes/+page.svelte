<script>
    let name = $state('');
	let age = $state('');
	let selectedUserName = $state('');
	let selectedUser = $state(null);
	let users = $state([]);

    const userload = async () => {
		try {
			const response = await fetch('/api/user');
			if (response.ok) users = await response.json();
			else console.error('Chyba při načítání uživatelů:', await response.text());
		} catch (error) {
			console.error('Chyba při načítání uživatelů:', error);
		}
	};
    
    $effect(userload);
</script>

<h1>Uživatelé:</h1>

{#each users as user}
    <p>Jméno:</p>{user.name}
{/each}