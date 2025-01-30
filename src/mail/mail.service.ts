import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { envs } from 'src/config';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendUserConfirmation(user: User, plainPassword: string) {
    await this.mailerService.sendMail({
      to: user.email,
      subject: `¡Welcome to ${envs.app_name}! Here are your credentials`,
      template: './confirmation',
      context: {
        name: `${user.name} ${user.last_name}`,
        password: plainPassword,
        email: user.email,
        app_name: envs.app_name,
        url_app: envs.frontend_url,
      },
    });
  }
  async sendUpdatePassword(user: User, plainPassword: string) {
    await this.mailerService.sendMail({
      to: user.email,
      subject: `Hi ${user.name} ${user.last_name}, Here are your credentials updated`,
      template: './confirmation',
      context: {
        name: `${user.name} ${user.last_name}`,
        password: plainPassword,
        email: user.email,
        app_name: envs.app_name,
        url_app: envs.frontend_url,
      },
    });
  }
  async sendResetPassword(user: User, plainPassword: string) {
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Password Reset Request 🔐',
      template: './resetPassword',
      context: {
        name: `${user.name} ${user.last_name}`,
        password: plainPassword,
        email: user.email,
        app_name: envs.app_name,
        url_app: envs.frontend_url,
        support_email: 'support@mail.com',
      },
    });
  }
}
