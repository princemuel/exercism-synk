default rel

section .rodata
msg: db "Hello, World!", 0

section .text
global hello
hello:
    lea rax, [msg]
    ret

%ifidn __OUTPUT_FORMAT__,elf64
section .note.GNU-stack noalloc noexec nowrite progbits
%endif

.section .rodata
msg: .string "Hello, World!"
.text
.global hello
hello:
adrp x0, msg
add x0, x0, :lo12:msg
ret
