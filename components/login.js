export default function Login() {
    
    return (
        <form>
            <div class="flex items-center justify-center h-screen bg-gray-100">
                <div class="bg-white py-6 rounded-md px-10 max-w-lg shadow-md">
                    <h1 class="text-center text-lg font-bold text-gray-500">Sign in</h1>
                    <div class="space-y-4 mt-6">
                        <div class="w-full">
                        {/* <input type="text" placeholder="fullname" class="px-4 py-2 bg-gray-50" />
                        </div>
                        <div class="w-full">
                        <input type="text" placeholder="username" class="px-4 py-2 bg-gray-50" />
                        </div>
                        <div class="w-full"> */}
                        <input type="text" placeholder="email" class="px-4 py-2 bg-gray-50" />
                        </div>
                        <div class="w-full">
                        <input type="password" placeholder="password" class="px-4 py-2 bg-gray-50" />
                        </div>
                    </div>
                    <button class="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight">Login</button>
                </div>
            </div>
        </form>
    )
}
