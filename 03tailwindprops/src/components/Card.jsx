import React from 'react'

function Card({username = "HC" , designation = "Not assigned  yet"}) {
  return (
    <div>
        <div class="flex flex-col items-center gap-6 p-7 rounded-2xl">
        <div>
            <img class="size-48 shadow-xl rounded-md" alt="" src="/img/cover.png" />
        </div>
        <div class="flex items-center">
            <span class="text-2xl font-medium">Class Warfare</span>
            <span class="font-medium text-sky-500">The Anti-Patterns</span>
            <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>{username}</span>
            <span>·</span>
            <span>{designation}</span>
            </span>
        </div>
        </div>
    </div>
  )
}

export default Card