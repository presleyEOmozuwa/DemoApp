output "subnet_ids" {
   value = [aws_subnet.public_subnet_1.id, aws_subnet.public_subnet_2.id]
}
