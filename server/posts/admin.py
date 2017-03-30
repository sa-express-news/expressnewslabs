from django.contrib import admin
from .models import Post, HomepageFeature, Image


class LimitHPFeatures(admin.ModelAdmin):
	def has_add_permission(self, request):
  		num_objects = self.model.objects.count()
  		if num_objects >= 3:
  			return False
  		else:
  			return True

	def get_readonly_fields(self, request, obj=None):
		if obj:
			return self.readonly_fields + ('title','slug')
		return self.readonly_fields

admin.site.register(Post)
admin.site.register(HomepageFeature, LimitHPFeatures)
admin.site.register(Image)
