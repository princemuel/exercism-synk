section .text
    global steps

steps:
    cmp rdi, 0
    jle .invalid_input       ; If n <= 0, return -1
    cmp rdi, 1
    je .zero_steps           ; If n == 1, return 0 steps

    xor rax, rax             ; Initialize step counter

.collatz_loop:
    cmp rdi, 1
    je .done

    test rdi, 1
    jz .even_case

    lea rdi, [rdi*3 + 1]
    inc rax
    jmp .collatz_loop

.even_case:
    shr rdi, 1
    inc rax
    jmp .collatz_loop

.done:
    ret

.zero_steps:
    xor rax, rax
    ret

.invalid_input:
    mov rax, -1
    ret

%ifidn __OUTPUT_FORMAT__,elf64
section .note.GNU-stack noalloc noexec nowrite progbits
%endif
