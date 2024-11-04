export default async function UsersPage() {

    await new Promise((resolve)=>setTimeout(resolve,2000));
    const response=await fetch('https://jsonplaceholder.typicode.com/users');
    const users=await response.json();
    console.log(users);
    return (
        <div className='grid grid-cols-2 gap-2 p-4'>
            {users.map((user)=>(
                <div key={user.id}
                className='flex items-center justify-between p-4 bg-white shadow rounded-lg'
                >
                    <div className='flex flex-col space-y-1'>
                        <h2 className='text-lg font-semibold'>{user.name}</h2>
                        <p className='text-sm'>{user.username}</p>
                    </div>

                    <div className='flex flex-col space-y-1 items-end'>
                        <h2 className='text-md'>{user.email}</h2>
                        <p className='text-md'>{user.phone}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}