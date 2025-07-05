import { useState, useEffect, useRef} from 'react'

export default function Typewriter(words, typingSpeed = 100, deletingSpeed = 60, pauseTime = 1200) {
    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [wordIndex, setWordIndex] = useState(0)
    const timer = useRef()

    useEffect(() => {
        const curr = words[wordIndex % words.length]
        const handle = () => {
            setText(prev => {
                if (!isDeleting) {
                    const next = curr.slice(0, prev.length + 1)
                    if (next == curr) {
                        clearTimeout(timer.current)
                        timer.current = setTimeout(() => setIsDeleting(true), pauseTime)
                    }
                    return next
                } else {
                    const next = curr.slice(0, prev.length - 1)
                    if (next === '') {
                        clearTimeout(timer.current)
                        setIsDeleting(false)
                        setWordIndex(idx => idx + 1)
                    }
                    return next
                }
            })
        }
        timer.current = setTimeout(handle, isDeleting ? deletingSpeed : typingSpeed)
        return () => clearTimeout(timer.current)
    }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

    return text
}