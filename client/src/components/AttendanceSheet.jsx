import React from 'react'

const AttendanceSheet = () => {
  return (
    <div class="flex items-center min-h-screen bg-gray-100 dark:bg-gray-900">
    <div class="w-full px-5 mx-auto lg:container">
        <div class="max-w-screen-lg mx-auto">
            <h2 className='text-2xl text-center p-3 text-white bg-violet-700'>Student Attendance Register</h2>
            <div class="min-w-full my-10 overflow-x-auto border rounded-md shadow-sm dark:border-gray-700">
                <table class="min-w-full bg-white rounded whitespace-nowrap">
                    <thead class="border-b bg-gray-50">
                        <tr class="">
                            <th class="px-3 py-3 text-center ">
                                <div class="flex place-content-center">
                                    <input type="checkbox" name="select_all" id="select_all" class="w-4 h-4 text-indigo-500 border border-gray-200 rounded focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 dark:border-gray-700" />
                                </div>
                            </th>
                            <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">Date</th>
                            <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">Student Name</th>
                            <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">Course Name</th>
                            <th class="px-3 py-3 text-xs font-normal text-right text-gray-500 uppercase align-middle">Grade</th>
                            <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">Day</th>
                            <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">Status</th>
                            <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">Status</th>
                            <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">Reason for Skipping</th>
                            <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">Emergency Contact</th>
                            <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle"></th>
                        </tr>
                    </thead>
                    <tbody class="text-sm bg-white divide-y divide-gray-200">
                        <tr>
                            <td class="w-20 px-3 py-4 text-center">
                                <input type="checkbox" name="select" class="w-4 h-4 rounded opacity-50" />
                            </td>
                            <td class="px-3 py-4 text-gray-500 ">May 07, 2021</td>
                            <td class="px-3 py-4">
                                <div class="flex items-center w-max">
                                    <img width="50" height="50" class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1506085452766-c330853bea50?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;h=200&amp;w=200&amp;s=3e378252a934e660f231666b51bd269a" alt="avatar" />
                                    <div class="ml-4">
                                        <div>Chase Maxwell</div>
                                        <div class="text-sm text-gray-400">chase@anothercompany.com</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-3 py-4">
                                <span>Introduction to ...</span>
                            </td>
                            <td class="px-3 py-4">
                                <span class="px-4 py-1 text-sm text-green-500 rounded-full bg-green-50">5</span>
                            </td>
                            <td class="px-3 py-4">
                                <span class="px-4 py-1 text-sm text-green-500 rounded-full bg-green-50">Wednesday</span>
                            </td>
                            <td class="px-3 py-4">
                                <span class="px-4 py-1 text-sm text-green-500 rounded-full bg-green-50">Attended</span>
                            </td>
                            <td class="px-3 py-4">
                                <span class="px-4 py-1 text-sm text-green-500 rounded-full bg-green-50"></span>
                            </td>
                            <td class="px-3 py-4">
                                <span class="px-4 py-1 text-sm text-green-500 rounded-full bg-green-50">1234567890</span>
                            </td>
                            <td class="w-20 px-3 py-2 text-center text-gray-500 ">
                                <div class="flex place-content-center">
                                    <a href="#!">
                                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="w-20 px-3 py-4 text-center">
                                <input type="checkbox" name="select" class="w-4 h-4 rounded opacity-50" />
                            </td>
                            <td class="px-3 py-4 text-gray-500 ">May 07, 2021</td>
                            <td class="px-3 py-4">
                                <div class="flex items-center w-max">
                                    <img width="50" height="50" class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1506085452766-c330853bea50?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;h=200&amp;w=200&amp;s=3e378252a934e660f231666b51bd269a" alt="avatar" />
                                    <div class="ml-4">
                                        <div>Chase Maxwell</div>
                                        <div class="text-sm text-gray-400">chase@anothercompany.com</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-3 py-4">
                                <span>Introduction to ...</span>
                            </td>
                            <td class="px-3 py-4">
                                <span class="px-4 py-1 text-sm text-green-500 rounded-full bg-green-50">3</span>
                            </td>
                            <td class="px-3 py-4">
                                <span class="px-4 py-1 text-sm text-green-500 rounded-full bg-green-50">Tuesday</span>
                            </td>
                            <td class="px-3 py-4">
                                <span class="px-4 py-1 text-sm text-green-500 rounded-full bg-green-50">Skipped</span>
                            </td>
                            <td class="px-3 py-4">
                                <span class="px-4 py-1 text-sm text-green-500 rounded-full bg-green-50">Sick</span>
                            </td>
                            <td class="px-3 py-4">
                                <span class="px-4 py-1 text-sm text-green-500 rounded-full bg-green-50">34567234890</span>
                            </td>
                            <td class="w-20 px-3 py-2 text-center text-gray-500 ">
                                <div class="flex place-content-center">
                                    <a href="#!">
                                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
  )
}

export default AttendanceSheet